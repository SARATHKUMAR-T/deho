import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.json({ message: 'Hello Deno!' }))

Deno.serve({ port: 4000 }, app.fetch)