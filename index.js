import appSrc from './app.js';
import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import m from 'mongoose';
import crypto from 'crypto';
import http from 'http';
import CORS from './CORS.js';
import UserModel from './models/User.js';
import puppeteer from 'puppeteer';

const User = UserModel(m);
const app = appSrc(express, bodyParser, fs, crypto, http, CORS, User, m, puppeteer);
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));


