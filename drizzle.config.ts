import type { Config } from 'drizzle-kit'
import { z } from 'zod'

const mysqlSchema = z.object({
	DB_HOST: z.string(),
	DB_USER: z.string(),
	DB_PASSWORD: z.string(),
	DB_DATABASE: z.string(),
	DB_PORT: z.string().optional().default('3306'),
})

const parseMysql = mysqlSchema.safeParse(process.env)

if (!parseMysql.success) {
	throw new Error('Invalid mysql env')
}

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } = parseMysql.data

export default {
	schema: './databases/mysql/schema/index.ts',
	out: './migrations',
	dialect: 'mysql',
	dbCredentials: {
		host: DB_HOST,
		user: DB_USER,
		password: DB_PASSWORD,
		database: DB_DATABASE,
		port: Number(DB_PORT),
	},
} satisfies Config
