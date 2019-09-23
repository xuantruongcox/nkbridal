ng build --prod && sudo rm -r public && mkdir public && cp upload-to-s3.sh dist/NKBridalFinal/ && cp -r  dist/NKBridalFinal/* public && sh public/upload-to-s3.sh
