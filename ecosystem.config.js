module.exports = {
  apps: [{
    name: 'NodeServer',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-13-58-82-229.us-east-2.compute.amazonaws.com',
      key: '~/keys/tommy_key.pem',
      ref: 'origin/master',
      repo: 'git@github.com:tommywintersr/NodeServer',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
