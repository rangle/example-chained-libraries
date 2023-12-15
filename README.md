I created from scratch a monorepo using npm workspaces containing:
`@my/ui` a simple vanilla TS, vite-compiled module
`@my/wrapper` a simple vanilla TS module, also vite-compiled, depending on `@my/ui`
`my-application` a simple angular application, utilizing `@my/wrapper`

I declared a type on `@my/ui` called `ThingType` that is the input type for the function `wrapThing`, declared in `@my/wrapper`

I proceeded then to import this wrapper function in `my-application` -- that has a dependency on `@my/wrapper` but not on `@my/ui`

Results:

- exported function works fine
- exported function has the proper types of the input identified and constrained (i.e.: I have an error if I don’t add all the necessary fields)
- exported function autocompletes the fields of the `ThingType` in my-application

The setup works on both node 20 and node 18

I developed the example further along by creating two layers of type validation:

- types on `@my/ui` will be automatically picked up by `@my/wrapper` and `my-application` (also from `@my/wrapper` to `my-application`) from _source_. This means, the _second_ you change the type in the library, the application will show you a typescript error.
- the **build**, however, will not pick types automatically from source. It will **only** break the build of my-application **when you build the library** — because builds are looking at `dist/index.d.ts`

I think this addresses all the constraints we have on the way the monorepo is supposed to behave, and it even solves the type export issue by separating IDE issues from build issues.
