#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { SundarDay4bestwayStack } from '../lib/sundar-day4-bestway-stack';
import { SundarDay4ec2all } from '../lib/sundar-day4-ec2all';

const app = new cdk.App();

new SundarDay4bestwayStack(app, 'SundarDay4bestwayStack', {

  // env: { account: '123456789012', region: 'us-east-1' },
  env: { account: '992382386705', region: 'us-east-1' },
 
});

new SundarDay4ec2all(app, 'SundarDay4ec2all', {

  // env: { account: '123456789012', region: 'us-east-1' },
  env: { account: '992382386705', region: 'us-east-1' },
 
});