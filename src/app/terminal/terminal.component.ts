import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LogsService} from "../logs.service";
import {concat, Observable, of} from "rxjs";
import {log} from "util";

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit, AfterViewInit {
  text: string[] = [];
  @ViewChild('scrollMe', {static: false}) scrollFrame: ElementRef;
  scrollContainer: any;

  constructor(private logsService: LogsService) { }

  ngOnInit() {
    this.text.push("hi");
    this.retrieveLogs();
  }

  ngAfterViewInit(): void {
    this.scrollContainer = this.scrollFrame.nativeElement;
  }

  retrieveLogs() {
    this.logsService.getLogs().subscribe((log) => {
      this.text.push(log);
      this.scrollToBottom();
    })
    console.log(this.text)
  }

  scrollToBottom() {
    this.scrollContainer.scroll({
      top: this.scrollFrame.nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth'
    })
  }

}
