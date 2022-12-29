import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useAccordion1Cb() {
	const onTitleClick = useCallback(callbackFactory("Accordion1", "Home", "/", "onTitleClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "controlled",
      "selector": [
        "custom",
        "open"
      ]
    }
  ]
}), [])
	return { onTitleClick }
}
export function useButton1Cb() {
	const onClick = useCallback(callbackFactory("Button1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}