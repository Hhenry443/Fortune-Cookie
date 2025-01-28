<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        deepPurple: '#37123C',
                        cyan: '#71677C',
                        lightGreen: '#A99F96',
                        mutedYellow: '#DDA77B',
                        terracotta: '#945D5E',
                        paper: '#f6eee3',
                    },
                    textShadow: {
                        glow: '0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFA500',
                    },
                    animation: {
                        rotateSwing: 'rotateSwing 2s ease-in-out infinite',
                        hammerSwing: 'hammerSwing 0.5s ease-in-out',
                    },
                    keyframes: {
                        rotateSwing: {
                        '0%': { transform: 'rotate(20deg)' },
                        '25%': { transform: 'rotate(20deg)' },
                        '50%': { transform: 'rotate(0deg)' },
                        '75%': { transform: 'rotate(-20deg)' },
                        '100%': { transform: 'rotate(0deg)' },
                        },
                        hammerSwing: {
                            '0%': { transform: 'rotate(0deg)' },
                            '30%': { transform: 'rotate(-45deg)' },
                            '60%': { transform: 'rotate(30deg)' },
                            '100%': { transform: 'rotate(0deg)' },
                            },
                    },

                },
            },
            plugins: [
                function ({ addUtilities }) {
                    addUtilities({
                        '.text-glow': {
                            textShadow: '0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFA500',
                        },
                        '.glow-effect': {
                            filter: 'drop-shadow(0 0 20px #FFD700)',
                        },
                    });
                },
            ],
        };
    </script>
    <title>Reverse Fortune Cookie</title>
</head>
