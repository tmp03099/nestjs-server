import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('photos')
export class PhotosController {

    //Register for url
    @Post("upload")

    // (existing component)it will auto save and set destination. 
    // If the folder not exist it will auto create new one. 
    @UseInterceptors(
        FileInterceptor("image",{
            dest:"./uploads",
        })
    )
    //before run this function it will run anotation @UseInterceptors
    //input file has anotation @UploadedFile in uploadSingle function
    uploadSingle(@UploadedFile() file){
        console.log(file);
    }

    @Get("upload")
    public getUpload(): string{
        return "dummy";
    }

}
