import { ComponentFixture, TestBed } from "@angular/core/testing";

import { IntroList } from "./intro-list";

describe("IntroList", () => {
  let component: IntroList;
  let fixture: ComponentFixture<IntroList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroList],
    }).compileComponents();

    fixture = TestBed.createComponent(IntroList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
