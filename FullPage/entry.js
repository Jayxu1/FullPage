pageEngine.init('.wrapper', ['red', 'blue', 'green'])
            .addSection('oneSection')
            .addComponent( {
                type: 'base',
                className: 'duyi',
                width: 100,
                height: 50,
                center: true,
                css: {
                    position: 'absolute',
                    opacity: 0,
                    bottom: 0,
                    //backgroundImage: 'url(./dialog.jpg)',
                    backgroundSize: '100% 100%',                        
                    padding: '10px 15px 10px 15px',
                    textAlign: 'justify',
                    fontSize: '18px',
                    fontWeight: '900',
                    lineHeight: '25px'
                },
                animateIn: {
                    opacity: 1,
                    bottom: 140,
                },
                animateOut: {
                    opacity: 0,
                    bottom: 0
                },
                delay: 200,
                event: {
                    click: function () {
                        alert($(this).text());
                    }
                }
            })   
                .addSlide('1Section-one')         
                .addComponent( {
                    type: 'base',
                    className: 'duyi',
                    width: 522,
                    height: 336,
                    text: 'Hello World',
                    center: true,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        backgroundImage: 'url(./dialog.jpg)',
                        backgroundSize: '100% 100%',                        
                        padding: '10px 15px 10px 15px',
                        textAlign: 'justify',
                        fontSize: '18px',
                        fontWeight: '900',
                        lineHeight: '25px'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 240,
                    },
                    animateOut: {
                        opacity: 0,
                        top: 0
                    },
                    delay: 100,
                    event: {
                        click: function () {
                            alert($(this).text());
                        }
                    }
                })
                .addSlide('1Section-two')         
                .addComponent( {
                    type: 'base',
                    className: 'duyi',
                    width: 522,
                    height: 336,
                    text: 'Hello World',
                    center: true,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        backgroundImage: 'url(./dialog.jpg)',
                        backgroundSize: '100% 100%',                        
                        padding: '10px 15px 10px 15px',
                        textAlign: 'justify',
                        fontSize: '18px',
                        fontWeight: '900',
                        lineHeight: '25px'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 240,
                    },
                    animateOut: {
                        opacity: 0,
                        top: 0
                    },
                    delay: 100,
                    event: {
                        click: function () {
                            alert($(this).text());
                        }
                    }
                })
                .addSlide('1Section-three')         
                .addComponent( {
                    type: 'base',
                    className: 'duyi',
                    width: 522,
                    height: 336,
                    text: 'Hello World',
                    center: true,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        backgroundImage: 'url(./dialog.jpg)',
                        backgroundSize: '100% 100%',                        
                        padding: '10px 15px 10px 15px',
                        textAlign: 'justify',
                        fontSize: '18px',
                        fontWeight: '900',
                        lineHeight: '25px'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 240,
                    },
                    animateOut: {
                        opacity: 0,
                        top: 0
                    },
                    delay: 100,
                    event: {
                        click: function () {
                            alert($(this).text());
                        }
                    }
                })
            .addSection('twoSection')
                .addSlide('2Section-one')
                .addComponent({
                    type: 'base',
                    className: 'duyi',
                    width: 522,
                    height: 336,
                    text: 'Hello World',
                    center: true,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        backgroundImage: 'url(./dialog.jpg)',
                        backgroundSize: '100% 100%',                        
                        padding: '10px 15px 10px 15px',
                        textAlign: 'justify',
                        fontSize: '18px',
                        fontWeight: '900',
                        lineHeight: '25px'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 240,
                    },
                    animateOut: {
                        opacity: 0,
                        top: 0
                    },
                    delay: 100,
                    event: {
                        click: function () {
                            alert($(this).text());
                        }
                    }
                })
                .addSlide('2Section-two')
                .addComponent({
                    type: 'base',
                    className: 'duyi',
                    width: 522,
                    height: 336,
                    text: 'Hello World',
                    center: true,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        backgroundImage: 'url(./dialog.jpg)',
                        backgroundSize: '100% 100%',                        
                        padding: '10px 15px 10px 15px',
                        textAlign: 'justify',
                        fontSize: '18px',
                        fontWeight: '900',
                        lineHeight: '25px'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 240,
                    },
                    animateOut: {
                        opacity: 0,
                        top: 0
                    },
                    delay: 100,
                    event: {
                        click: function () {
                            alert($(this).text());
                        }
                    }
                })
                .addSlide('2Section-three')
                        .addComponent({
                            type: 'base',
                            className: 'duyi',
                            width: 522,
                            height: 336,
                            text: 'Hello World',
                            center: true,
                            css: {
                                position: 'absolute',
                                opacity: 0,
                                top: 0,
                                backgroundImage: 'url(./dialog.jpg)',
                                backgroundSize: '100% 100%',                        
                                padding: '10px 15px 10px 15px',
                                textAlign: 'justify',
                                fontSize: '18px',
                                fontWeight: '900',
                                lineHeight: '25px'
                            },
                            animateIn: {
                                opacity: 1,
                                top: 240,
                            },
                            animateOut: {
                                opacity: 0,
                                top: 0
                            },
                            delay: 100,
                            event: {
                                click: function () {
                                    alert($(this).text());
                                }
                            }
                        })
                .addSection('threeSection')
                    .addSlide('3Section-one')
                        .addComponent({
                            type: 'base',
                            className: 'duyi',
                            width: 522,
                            height: 336,
                            text: 'Hello World',
                            center: true,
                            css: {
                                position: 'absolute',
                                opacity: 0,
                                top: 0,
                                backgroundImage: 'url(./dialog.jpg)',
                                backgroundSize: '100% 100%',                        
                                padding: '10px 15px 10px 15px',
                                textAlign: 'justify',
                                fontSize: '18px',
                                fontWeight: '900',
                                lineHeight: '25px'
                            },
                            animateIn: {
                                opacity: 1,
                                top: 240,
                            },
                            animateOut: {
                                opacity: 0,
                                top: 0
                            },
                            delay: 100,
                            event: {
                                click: function () {
                                    alert($(this).text());
                                }
                            }
                        })
                        
                    .addSlide('3Section-two')
                        .addComponent({
                            type: 'base',
                            className: 'duyi',
                            width: 522,
                            height: 336,
                            text: 'Hello World',
                            center: true,
                            css: {
                                position: 'absolute',
                                opacity: 0,
                                top: 0,
                                backgroundImage: 'url(./dialog.jpg)',
                                backgroundSize: '100% 100%',                        
                                padding: '10px 15px 10px 15px',
                                textAlign: 'justify',
                                fontSize: '18px',
                                fontWeight: '900',
                                lineHeight: '25px'
                            },
                            animateIn: {
                                opacity: 1,
                                top: 240,
                            },
                            animateOut: {
                                opacity: 0,
                                top: 0
                            },
                            delay: 100,
                            event: {
                                click: function () {
                                    alert($(this).text());
                                }
                            }
                        })
                    .addSlide('3Section-three')
                        .addComponent({
                            type: 'base',
                            className: 'duyi',
                            width: 522,
                            height: 336,
                            text: 'Hello World',
                            center: true,
                            css: {
                                position: 'absolute',
                                opacity: 0,
                                top: 0,
                                backgroundImage: 'url(./dialog.jpg)',
                                backgroundSize: '100% 100%',                        
                                padding: '10px 15px 10px 15px',
                                textAlign: 'justify',
                                fontSize: '18px',
                                fontWeight: '900',
                                lineHeight: '25px'
                            },
                            animateIn: {
                                opacity: 1,
                                top: 240,
                            },
                            animateOut: {
                                opacity: 0,
                                top: 0
                            },
                            delay: 100,
                            event: {
                                click: function () {
                                    alert($(this).text());
                                }
                            }
                        })
        .load();

