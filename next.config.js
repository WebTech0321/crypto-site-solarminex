const withImages = require('next-images')
const withVideos = require('next-videos')
const path = require('path')

module.exports = 
    withVideos(
        withImages({
            sassOptions: {
                includePaths: [path.join(__dirname, 'styles')],
            }
        })
    )