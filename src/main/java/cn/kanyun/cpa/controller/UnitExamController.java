package cn.kanyun.cpa.controller;

import cn.kanyun.cpa.pojo.CpaOption;
import cn.kanyun.cpa.pojo.CpaRepertory;
import cn.kanyun.cpa.pojo.CpaResult;
import cn.kanyun.cpa.service.IUnitExamService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.*;

/**
 * Created by KANYUN on 2017/3/18.
 */
@Controller
@RequestMapping("/unitExam")
public class UnitExamController {
    @Resource(name = IUnitExamService.SERVICE_NAME)
    private IUnitExamService unitExamService;

    @RequestMapping("/showUnitExam.do")
    @ResponseBody
    public CpaResult showUnitExam(String typeCode) {
        Object[] params = {typeCode};
        String where = "o.testType=? ";
        CpaResult result = unitExamService.getUnitExam(where, params);

        return result;
    }
}