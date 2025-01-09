import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { version } from 'os';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SundarDay4bestwayStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

  const SundarBucket = ['sundar-s3-bucket-01', 'sundar-s3-bucket-02', 'sundar-s3-bucket-03', 'sundar-s3-bucket-04', 'sundar-s3-bucket-05'];
    for (let i = 1; i <= 5; i++) {
      new s3.Bucket(this, `SundarBucket${i}`, {
        versioned: true,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
        autoDeleteObjects: true,
        bucketName: SundarBucket[i]
      });
    }

     }
}
