// NOTE: TS

import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

function useCreateForm(yupObject, mode = 'onChange') {
  const [isLoad, setIsLoad] = React.useState(false)
  const {
    control,
    setError,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(yup.object(yupObject).required()),
    mode,
  })

  const setErrors = fields => {
    Object.keys(fields).forEach(field => setError(field, { message: fields[field] }))
  }

  const submit = (onSubmit, callbacks) =>
    handleSubmit(data => {
      setIsLoad(true)
      onSubmit(data)
        .then(result => {
          setIsLoad(false)
          if (callbacks?.onSuccess) callbacks.onSuccess(result)
        })
        .catch(error => {
          setIsLoad(false)
          if (callbacks?.onError) callbacks.onError(error, setErrors)
        })
    })()

  return { isLoad, control, errors, submit, isValid }
}

export default useCreateForm
