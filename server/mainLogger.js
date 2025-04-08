const pino = require('pino');

const transport = pino.transport({

    targets: [
        {
            level: 'info',
            target: 'pino/file',
            options: {
                destination: '/var/log/FS/verbose.log',
                mkdir: true
            }
        },
        {
            level: 'warn',
            target: 'pino/file',
            options: {
                destination: '/var/log/FS/verbose.log',
                mkdir: true
            }
        },
        {
            level: 'error',
            target: 'pino/file',
            options: {
                destination: '/var/log/FS/error.log',
                mkdir: true
            }
        },
        {
            target: 'pino/file', level: 'info', options: { destination: 1 }
        },
        {
            target: 'pino/file', level: 'warn', options: { destination: 1 }
        },
        {
            target: 'pino/file', level: 'error', options: { destination: 2 }
        }
    ],
});


const mainLogger = pino({
    mixin: (_context, level) => {
        return {
            logLevel: { 10: "TRACE", 20: "DEBUG", 30: "INFO", 40: "WARN", 50: "ERROR", 60: "FATAL" }[level],
            timestamp: new Date().toLocaleString(),
            label: "[Bobbys Medals]"
        }
    },
    transport: {
        targets: [
            {
                level: 'info',
                target: 'pino/file',
                options: {
                    destination: '/var/log/FS/verbose.log',
                    mkdir: true
                }
            },
            {
                level: 'warn',
                target: 'pino/file',
                options: {
                    destination: '/var/log/FS/verbose.log',
                    mkdir: true
                }
            },
            {
                level: 'error',
                target: 'pino/file',
                options: {
                    destination: '/var/log/FS/error.log',
                    mkdir: true
                }
            },
            {
                target: 'pino/file', level: 'info', options: { destination: 1 }
            },
            {
                target: 'pino/file', level: 'warn', options: { destination: 2 }
            },
            {
                target: 'pino/file', level: 'error', options: { destination: 2 }
            },
        ]
    }
});

module.exports = mainLogger;