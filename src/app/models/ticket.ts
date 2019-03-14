export class Ticket {
    id?: number;
    status: TicketStatus = TicketStatus.OPENED;
    device: string;
    description: string;
    previousAttempts?: string;
    solution?: string;
    agentId: number;
}

export enum TicketStatus {
    OPENED,
    CLOSED
}
