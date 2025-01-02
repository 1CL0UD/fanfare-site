import * as z from 'zod';

export const onboardingSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: 'Username must be at least 3 characters.',
    })
    .max(20, {
      message: 'Username must not exceed 20 characters.',
    }),
  bio: z.string().max(160, {
    message: 'Bio must not exceed 160 characters.',
  }),
});

export type OnboardingFormValues = z.infer<typeof onboardingSchema>;
