import * as Yup from 'yup'


export const ExperienceSchema = Yup.object().shape({
    company: Yup.string()
        .required('Company name is required'),
    title: Yup.string()
        .required('Title is required'),
    startMonth: Yup.number()
        .required('Start month is required'),
    startYear: Yup.number()
        .required("Start year is required"),
    endMonth: Yup.number()
        .when('current', {
            is: false,
            then: Yup.number().required('End month is required'),
            otherwise: Yup.number()
        }),
    endYear: Yup.number()
        .when('current', {
            is: false,
            then: Yup.number().required('End year is required'),
            otherwise: Yup.number()
        }),
    current: Yup.boolean(),
    tags: Yup.array().of(Yup.string()),
    description: Yup.string()
  });