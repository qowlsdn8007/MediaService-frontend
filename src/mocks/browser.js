import { setupWorker } from 'msw';
import sign_handlers from './signHandlers';
import media_handler from './mediaHandler';
import profile_handler from './profileHandler';
import user_handler from './userHandler';

const handlers = [...sign_handlers, ...media_handler, ...profile_handler, ...user_handler];

export const worker = setupWorker(...handlers);