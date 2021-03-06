'use strict'
require('dotenv').config()
const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const gqlMiddleware = require('express-graphql')
const {readFileSync}= require('fs')
const {join}=require('path')
const resolvers = require('./lib/resolvers')
const typeDefs=readFileSync(join(__dirname,'lib','schema.graphql'),'utf-8')
const cors = require('cors')
const app = express()

const port = process.env.port || 3000

const isDev = process.env.NODE_ENV !=='produccion'

// definiendo el esquema
const schema = makeExecutableSchema({typeDefs,resolvers})



app.use(cors())
app.use('/api',(req,res,next)=>{
 //console.log(req)
  next();
})
app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: isDev
}))

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})
