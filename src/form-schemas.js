import * as Yup from 'yup'

export const ExperienceSchema = Yup.object().shape({
    company: Yup.string()
        .required('Company name is required'),
    title: Yup.string()
        .required('Title is required'),
    startMonth: Yup.number()
        .required('Start month is required')
        .integer()
        .max(12),
    startYear: Yup.number()
        .typeError('Year must be a number')
        .required('Start year is required')
        .integer('Year is not valid')
        .min(1900, 'Year is not valid')
        .max(new Date().getFullYear(), 'Year is not valid'),
    endMonth: Yup.number()
        .when('current', {
            is: false,
            then: Yup.number().required('End month is required').integer().max(12)
            .test('date-test', 'Start date must be before end date',
                function (value) {
                    const { startYear, startMonth, endYear } = this.parent;
                    if (startMonth !== 0 && startYear !== undefined && value !== 0 && endYear !== undefined)
                    {
                        let startDate = new Date(startYear, startMonth);
                        let endDate = new Date(endYear, value);
                        return startDate < endDate;
                    }
                    return true;
                }),
            otherwise: Yup.number()
        }),
    endYear: Yup.number()
        .when('current', {
            is: false,
            then: Yup.number().typeError('Year must be a number')
            .required('End year is required')
            .integer('Year is not valid')
            .max(new Date().getFullYear(), 'Year is not valid'),
            otherwise: Yup.number()
        }),
    current: Yup.boolean(),
    tags: Yup.array().of(Yup.string()),
    description: Yup.string()
  });

export const EducationSchema = Yup.object().shape({
    company: Yup.string()
        .required('School name is required'),
    title: Yup.string()
        .required('Degree is required'),
    startMonth: Yup.number()
        .required('Start month is required')
        .integer()
        .max(12),
    startYear: Yup.number()
        .typeError('Year must be a number')
        .required('Start year is required')
        .integer('Year is not valid')
        .min(1900, 'Year is not valid')
        .max(new Date().getFullYear(), 'Year is not valid'),
    endMonth: Yup.number().required('End month is required').integer().max(12)
        .test('date-test', 'Start date must be before end date',
            function (value) {
                const { startYear, startMonth, endYear } = this.parent;
                if (startMonth !== 0 && startYear !== undefined && value !== 0 && endYear !== undefined)
                {
                    let startDate = new Date(startYear, startMonth);
                    let endDate = new Date(endYear, value);
                    return startDate < endDate;
                }
                return true;
        }),
    endYear: Yup.number().typeError('Year must be a number')
        .required('End year is required')
        .integer('Year is not valid'),
    tags: Yup.array().of(Yup.string()),
    description: Yup.string()
});

export const ProfileSchema = Yup.object().shape({
    name: Yup.string()
        .required('Full name is required'),
    website: Yup.string().url().label('Website'),
    email: Yup.string().email().label("Email address"),
    location: Yup.string().label('Location'),
    github: Yup.string().label('Github')
});