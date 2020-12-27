import { MikroORM } from '@mikro-orm/core'
import { __prod__ } from './constants'
import { Post } from './entities/Post'
import microConfig from './mikro-orm.config'

const main = async () => {
	const orm = await MikroORM.init(microConfig)
	await orm.getMigrator().up()
	const post = await orm.em.create(Post, { title: "my first post" })
	await orm.em.persistAndFlush(post)
	const authors1 = await orm.em.find(Post, {})
  console.log(authors1)
}

main().catch(err=>console.log(err))