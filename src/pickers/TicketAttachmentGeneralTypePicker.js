import React from "react";
import { ConstantBasedPicker } from "@openimis/fe-core";

import { TICKET_ATTACHMENT_TYPE_STATUS } from "../constants";

const TicketAttachmentGeneralTypePicker = (props) => {
  return (
    <ConstantBasedPicker
      module="grievanceSocialProtection"
      label="ticketAttachmentGeneralType"
      withLabel={false}
      constants={TICKET_ATTACHMENT_TYPE_STATUS}
      {...props}
    />
  );
};

export default TicketAttachmentGeneralTypePicker;