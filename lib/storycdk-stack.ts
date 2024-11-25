import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {AstroAWS} from "@astro-aws/constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';


export class StorycdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {

    super(scope, id, props)

    new AstroAWS(this, "AstroAWS", {
      websiteDir: "../story",
    })

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'StorycdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
