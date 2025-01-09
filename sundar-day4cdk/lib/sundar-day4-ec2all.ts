import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SundarDay4ec2all extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'SundarDay4CdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const vpc = ec2.Vpc.fromLookup(this,'sundarvpc',{
      isDefault: true
    });

    const sundarvm = new ec2.Instance(this,'sundarvm1',{
      vpc,
      instanceType: new ec2.InstanceType('t2.micro'),
      machineImage: new ec2.AmazonLinuxImage(),
      keyPair: ec2.KeyPair.fromKeyPairName(this,'sundarkey','splunk-key'),
      //       splunk-key is original key name of aws account
      // so you have to use the same
      instanceName: 'sundar-linux-vm-stack1' 
    });

    // printing instance ID 
    new cdk.CfnOutput(this,'sundarInstanceID',{
      description: 'this will print instance id',
      value: sundarvm.instanceId,
    });
    
    new cdk.CfnOutput(this,'sundarvmpublicdns',{
      value: sundarvm.instancePublicDnsName
    });

  const securityGroup = new ec2.SecurityGroup(this, 'sundarSecurityGroup', {
    vpc,
    allowAllOutbound: true,
    securityGroupName: 'sundar-security-group'
  });

  securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443), 'Allow HTTPS traffic');
  securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(22), 'Allow SSH traffic');

  sundarvm.addSecurityGroup(securityGroup);
  }
}
