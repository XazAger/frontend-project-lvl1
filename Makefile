install: # install node_modules
	npm ci

brain-games: # Start brain-games
	node bin/brain-games.js

brain-even: # Start brain-even
	node bin/brain-even.js

brain-calc: # Start brain-calc
	node bin/brain-calc.js

brain-gcd: # Start brain-gcd
	node bin/brain-gcd.js

brain-progression: # Start brain-progression
	node bin/brain-progression.js

brain-prime: # Start brain-prime
	node bin/brain-prime.js

publish: # Run publish
	npm publish --dry-run

lint: # connetion Eslint
	npx eslint .

actions: # send to git actions
	make lint