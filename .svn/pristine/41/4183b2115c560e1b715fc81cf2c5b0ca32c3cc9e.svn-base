package com.ltvs.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;

/**
 * Created by LIU on 2019/5/27.
 */
@Controller
public class ImportFileController {

    @RequestMapping(value = "/secondsave",method = RequestMethod.POST)
    public String secondsave(@RequestParam(value = "file") MultipartFile file, HttpServletRequest request) {

        try {

            //上传后的地址，注意("/upload")是表示文件上传后的目标文件夹

            String realPath = request.getSession().getServletContext().getRealPath("/upload");

            System.out.println("打印文件上传的路径"+realPath);

            //获取文件名

            String filename = file.getOriginalFilename();

            //获取文件后缀名

            String extensionname = filename.substring(filename.lastIndexOf(".") + 1);

            // 存入的文件名
            String newFilename=filename+"."+extensionname;

            //创建File对象，传入目标路径参数，和新的文件别名

            File dir=new File(realPath,newFilename);

            if (!dir.exists()){//如果dir代表的文件不存在，则创建它，

                dir.mkdirs();//

            }

            //如果存在则直接执行下面操作

            file.transferTo(dir);//将上传的实体文件复制到指定目录upload下

         // 判断传入的文件是否符合规范



        } catch (IOException e) {

            e.printStackTrace();

        }

        return "title_file_sucess";//执行完毕，返回一个逻辑视图

    }


}
