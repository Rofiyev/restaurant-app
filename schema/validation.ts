import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

const invalid_type_error: string = "Invalid type provided for this field";
const required_error: string = "This field cannot be blank";

export const FormRegisterSchema: z.ZodObject<{
  full_name: z.ZodString;
  email: z.ZodString;
  username: z.ZodString;
  password: z.ZodString;
}> = z.object({
  full_name: z.string({ invalid_type_error, required_error }).min(5, {
    message: "Full Name must be at least 5 characters.",
  }),
  email: z
    .string({ invalid_type_error, required_error })
    .email({ message: "There might be an error in your email." })
    .min(5, {
      message: "Email must be at least 5 characters.",
    }),
  username: z.string({ invalid_type_error, required_error }).min(5, {
    message: "Full Name must be at least 5 characters.",
  }),
  password: z
    .string({ invalid_type_error, required_error })
    .min(8, { message: "Your password must contain at least 8 characters" })
    .max(16),
});

export const ActivateRegisterSchema = z.object({
  email: z
    .string({ invalid_type_error, required_error })
    .email({ message: "There might be an error in your email." })
    .min(5, {
      message: "Email must be at least 5 characters.",
    }),
  activate_code: z.string({ invalid_type_error, required_error }).length(6),
});

export const FormLoginSchema = z.object({
  username: z.string({ invalid_type_error, required_error }).min(5, {
    message: "Full Name must be at least 5 characters.",
  }),
  password: z
    .string({ invalid_type_error, required_error })
    .min(8, { message: "Your password must contain at least 8 characters" })
    .max(16),
});

export const ResetPasswordSchema = z.object({
  activation_code: z.string({ invalid_type_error, required_error }).length(6),
  new_password: z
    .string({ invalid_type_error, required_error })
    .min(8, { message: "Your password must contain at least 8 characters" })
    .max(16),
  confirm_password: z
    .string({ invalid_type_error, required_error })
    .min(8, { message: "Your password must contain at least 8 characters" })
    .max(16),
});

export const EmailSchema = z.object({
  email: z
    .string({ invalid_type_error, required_error })
    .email({ message: "There might be an error in your email." })
    .min(5, {
      message: "Email must be at least 5 characters.",
    }),
});

export const ProfileSchema = z.object({
  full_name: z.string({ invalid_type_error, required_error }).min(5, {
    message: "Full Name must be at least 5 characters.",
  }),
  username: z.string({ invalid_type_error, required_error }).min(5, {
    message: "Full Name must be at least 5 characters.",
  }),
  email: z
    .string({ invalid_type_error, required_error })
    .email({ message: "There might be an error in your email." })
    .min(5, {
      message: "Email must be at least 5 characters.",
    }),
  phone: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" })
    .or(z.literal("")),
});
