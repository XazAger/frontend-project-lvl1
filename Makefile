install: # Create node_modules
	npm ci

brain-games: # Start code
	node bin/brain-games.js

publish: # Run publish
	npm publish --dry-run