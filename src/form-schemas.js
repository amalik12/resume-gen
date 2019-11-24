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
    endMonth: Yup.number(),
    endYear: Yup.number(),
    current: Yup.boolean(),
    tags: Yup.array(),
    description: Yup.string()
  });