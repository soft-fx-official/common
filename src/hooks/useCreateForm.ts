// NOTE: TS

import React from 'react'
import { CriteriaMode, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'

type OnSubmit = (data: any) => Promise<any>

interface SubmitCallback {
  onSuccess: (result: any) => void
  onError: (error: any, fn: (error: any) => void) => void
}

const useCreateForm = (yupObject: any, mode: any = 'onChange', criteriaMode?: CriteriaMode) => {
  const [isLoad, setIsLoad] = React.useState(false)
  const {
    control,
    setValue,
    setError,
    clearErrors,
    formState: { errors, isValid },
    getValues,
    handleSubmit,
    ...rest
  } = useForm({
    resolver: yupResolver(yup.object(yupObject).required()),
    criteriaMode,
    mode,
  })

  const setErrors = (fields: any) => {
    Object.keys(fields).forEach(field =>
      setError(
        field,
        Array.isArray(fields[field])
          ? { message: fields[field][0], type: fields[field][1] }
          : { message: fields[field] },
      ),
    )
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

  return { ...rest, isLoad, control, errors, submit, isValid, getValues, setValue, clearErrors }
}

export { useCreateForm }
