// NOTE: TS

import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'

type OnSubmit = (data: any) => Promise<any>

interface SubmitCallback {
  onSuccess: (result: any) => void
  onError: (error: any, fn: (error: any) => void) => void
}

const useCreateForm = (yupObject: any, mode: any = 'onChange') => {
  const [isLoad, setIsLoad] = React.useState(false)
  const {
    control,
    setError,
    formState: { errors, isValid },
    getValues,
    handleSubmit,
    ...rest
  } = useForm({
    resolver: yupResolver(yup.object(yupObject).required()),
    mode,
  })

  const setErrors = (fields: any) => {
    Object.keys(fields).forEach(field => setError(field, { message: fields[field] }))
  }

  const submit = (onSubmit: OnSubmit, callbacks?: SubmitCallback) =>
    handleSubmit(data => {
      setIsLoad(true)
      onSubmit(data)
        .then((result: any) => {
          setIsLoad(false)
          if (callbacks?.onSuccess) callbacks.onSuccess(result)
        })
        .catch((error: any) => {
          setIsLoad(false)
          if (callbacks?.onError) callbacks.onError(error, setErrors)
        })
    })()

  return { ...rest, isLoad, control, errors, submit, isValid, getValues }
}

export { useCreateForm }
