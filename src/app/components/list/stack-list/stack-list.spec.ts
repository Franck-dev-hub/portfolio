import { ComponentFixture, TestBed } from "@angular/core/testing";

import { StackList } from "./stack-list";

describe("StackList", () => {
  let component: StackList;
  let fixture: ComponentFixture<StackList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackList],
    }).compileComponents();

    fixture = TestBed.createComponent(StackList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
