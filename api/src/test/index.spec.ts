// Import superagent, expect and it
import request from 'supertest';
import { expect } from 'chai';
import { it, describe } from 'mocha';

// Import app
import app from '../app';

// Mock User
const mockUser = {
    name: 'John',
    lastName: 'Doe',
};

// Test suite
describe('Routes', () => {

    // POST /api/users
    it('should create an user', async () => {
        // Send POST request to /api/users
        const res = await request(app).post('/api/users').send(mockUser);

        // Check response
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('id');
        expect(res.body.name).to.equal(mockUser.name);
        expect(res.body.lastName).to.equal(mockUser.lastName);
    });

    // GET /api/users
    it('should get all users', async () => {
        // Send GET request to /api/users
        const res = await request(app).get('/api/users');

        // Check response
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.at(-1).name).to.equal(mockUser.name);
        expect(res.body.at(-1).lastName).to.equal(mockUser.lastName);
    });

});
