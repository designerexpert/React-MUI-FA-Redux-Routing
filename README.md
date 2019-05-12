# Client Boilerplate Containing:
* React
* Material UI
* Font Awesome
* React Router
* Redux
* Storybook

# Server Boilerplate Containing:
* Express
* JWT
* Serving React App Statically

## Generating Public and Private Keys for Testing
### FYI: Do Not Commit this files on real projects
* First Generate a Secret Private Key `Don't add passphrase`. This will be kept a secret and used to generate and sign your own tokens.

```
ssh-keygen -t rsa -b 2048 -f secretRS256PRIVATE.pem
```
* Then Using that Secret Private Key File, generate a public key. This will be shared with anyone validating your signed tokens.

```
openssl rsa -in secretRS256PRIVATE.pem -pubout -outform PEM -out secretRS256PUBLIC.pem
```
