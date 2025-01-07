import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class sundarEc2Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'MyEc2Queue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    // define default vpc to use from existing aws region 
    const vpc = ec2.Vpc.fromLookup(this,'ExistingVPC' ,{
      isDefault: true
  });
  // creating ec2 instace 
  const sundarinstance = new ec2.Instance(this,'sundarmachine',{

      vpc,  
      instanceType: new ec2.InstanceType('t2.micro'),
      machineImage: new ec2.AmazonLinuxImage(),
      keyName: 'splunk-key',
  
  });

 

  }
}
