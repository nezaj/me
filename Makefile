MAKEFLAGS = --no-print-directory --always-make --silent
MAKE = make $(MAKEFLAGS)

.PHONY: repl deploy

repl:
	@echo "Starting repl..."
	node repl.js

dev:
	@echo "Starting dev server..."
	yarn start

deploy:
	@echo "Deploying to master..."
	git push origin master
	@echo "Deploying to github pages..."
	yarn deploy
