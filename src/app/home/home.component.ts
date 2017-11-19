import {Component} from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
	contents : [{
        type: string,
        content: string,
        release: string
    }];
    constructor(){

        this.contents = [{
            type : "新闻",
            content: "LARP推理游戏起源！",
            release : "2017-11-18"
        },
        {
            type : "新闻",
            content: "全民侦探社APP全面上线,欢迎下载使用！",
            release : "2017-11-19"
        },
        {
            type : "公告",
            content: "维护中：搭建用户入口，剧本创作模块。",
            release : "2017-11-18"
        },
        {
            type : "新手指南",
            content: "APP使用说明",
            release : "2017-11-18"
        },
        {
            type : "新手指南",
            content: "真人扮演推理游戏入门指南",
            release : "2017-11-18"
        },
        {
            type : "游戏",
            content: "风波起：上海滩的谍战大戏！谁才是”老鬼“？",
            release : "2017-11-17"
        },
        {
            type : "游戏",
            content: "万圣惊魂夜",
            release : "2017-11-17"
        },
        {
            type : "新手指南",
            content: "全民侦探社微信小程序",
            release : "2017-10-16"
        }]
    };
}
