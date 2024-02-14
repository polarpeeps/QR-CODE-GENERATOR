import express from "express";
import fs from "fs"
import qr from "qr-image";
import cors from "cors"
const app =express()
const PORT=3000
app.use(cors())

// app.get("/",(req,res)=>{
//     res.status(200).render('./utils/qr_img.png')
// });
// 


app.get('/:qrcode', (req, res) => {
    // Read the URL parameter
    const url = req.params.qrcode;

    // Generate the QR code
    const qr_svg = qr.image(url);
    const qrImageBuffer = [];
    
    qr_svg.on('data', chunk => qrImageBuffer.push(chunk));
    qr_svg.on('end', () => {
        const qrImageData = Buffer.concat(qrImageBuffer);
        
        // Set content type as image/png
        res.contentType('image/png');
        // Send the QR code image data in the response
        res.send(qrImageData);
    });
    
    qr_svg.on('error', err => {
        // If error generating QR code, send an error response
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
});

app.listen(PORT,()=>{
    console.log(`Server is running on port:${PORT}`)
})