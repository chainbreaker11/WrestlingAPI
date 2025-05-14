import {body, validationResult} from 'express-validator';

//reglas del middleware

export const validateWrestler = [
    body('name').notEmpty().withMessage('Name is required'),
    body('weight').isFloat({ min: 0 }).withMessage('Weight must be a positive number'),
    body('birthdate').isDate().withMessage('Birthdate must be a valid date'),

    //midleware para validar los errores
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];