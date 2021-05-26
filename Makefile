install: # Create node_modules
	npm ci

brain-games: # Start brain-games
	node bin/brain-games.js

brain-even: # Start brain-even
	node bin/brain-even.js

brain-calc: # Start brain-calc
	node bin/brain-calc.js

publish: # Run publish
	npm publish --dry-run

lint: # connetion Eslint
	npx eslint .

actions: # send to git actions
	make lint