const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const router = express.Router();
/*
    The Public Secret is typically mounted upon deployment
    Location: /etc/jwt/secrets/publicSecretFilename.pem
*/
const secret = fs.readFileSync('./server/notSoSecret.pem', 'utf8');
const publicSecret = fs.readFileSync('./server/secretRS256PUB.pem', 'utf8');

/* Generation of a Test Token */
const generateToken = (req, res) => {
	try {
		const payload = {
			sub: 'test',
			name: 'designerexpert',
			roles: ['SOME, ROLE, HERE', 'ANOTHER, ROLE, HERE'],
			adGroups: ['SOME_AD_GROUP', 'ANOTHER_AD_GROUP']
		};
		const token = jwt.sign(payload, secret, { algorithm: 'RS256', expiresIn: 60 * 5 });
		res.setHeader('Authorization', `Bearer ${token}`);
		res.send({ token: `Bearer ${token}` });
	} catch (err) {
		console.log('ERROR GENERATING JWT TOKEN');
		res.status(500).json({ message: 'Unable to generate JWT Token: ' + err.message });
	}
};

/* Validating A Token */
validateToken = (req, res) => {
	try {
		const rawToken = req.headers.authorization;
		const jwtToken = rawToken.replace('Bearer ', '');
		console.log('JWT TOKEN', jwtToken);
		const validJwt = jwt.verify(jwtToken, publicSecret, { algorithm: 'RS256' });
		res.send({ decodedToken: validJwt });
	} catch (err) {
		res.status(403).json({ message: err.message });
	}
};

router.get('/token', generateToken);
router.get('/auth', validateToken);

module.exports = router;
