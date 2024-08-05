import { z } from 'zod';

export const EditUserProfileFormSchema = z.object({
	name: z.string().min(1, 'Required'),
	email: z.string().email('Required'),
});
