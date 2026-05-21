module.exports = {
  apps: [
    {
      name: "slug-generator",
      script: "node_modules/.bin/next",
      args: "start -p 3000",
      cwd: "/var/www/slug-generator",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "256M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        NEXT_PUBLIC_GA_ID: "G-GQK63V1GJG",
      },
    },
  ],
};
