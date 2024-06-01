import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { createWallet } from './functions/createWallet/resource'

defineBackend({
  auth,
  data,
  createWallet
});
