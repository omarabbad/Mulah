
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./components/ui/table";
import { AnimatedThemeToggle } from "./components/ui/animated-theme-toggle";

export default function App() {
    // Variables from index.html logic
    const A5 = 2;
    const A20 = 28;
    const A15 = 80;
    const A7 = 5;
    const A13 = 90;
    const A12 = 3;

    const alpha = A5 + A20;
    const beta = A15 / A7;
    const charlie = A13 * A12;

    // Data for Table 1
    const table1Data = [
        { index: "A1", value: 41 },
        { index: "A2", value: 18 },
        { index: "A3", value: 21 },
        { index: "A4", value: 63 },
        { index: "A5", value: A5 },
        { index: "A6", value: 53 },
        { index: "A7", value: A7 },
        { index: "A8", value: 57 },
        { index: "A9", value: 60 },
        { index: "A10", value: 93 },
        { index: "A11", value: 28 },
        { index: "A12", value: A12 },
        { index: "A13", value: A13 },
        { index: "A14", value: 39 },
        { index: "A15", value: A15 },
        { index: "A16", value: 88 },
        { index: "A17", value: 49 },
        { index: "A18", value: 60 },
        { index: "A19", value: 26 },
        { index: "A20", value: A20 },
    ];

    return (
        <div className="flex flex-col gap-12 p-8 max-w-2xl mx-auto bg-background min-h-screen text-foreground">
            <div className="flex justify-end">
                <AnimatedThemeToggle />
            </div>
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight">Table 1: Raw Data</h2>
                <div className="rounded-xl border shadow-sm">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Index #</TableHead>
                                <TableHead>Value</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {table1Data.map((row) => (
                                <TableRow key={row.index}>
                                    <TableCell className="font-medium">{row.index}</TableCell>
                                    <TableCell>{row.value}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight">Table 2: Calculated Results</h2>
                <div className="rounded-xl border shadow-sm">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[150px]">Category</TableHead>
                                <TableHead>Value</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">Alpha <span className="text-muted-foreground text-xs ml-2">(A5 + A20)</span></TableCell>
                                <TableCell>{alpha}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Beta <span className="text-muted-foreground text-xs ml-2">(A15 / A7)</span></TableCell>
                                <TableCell>{beta}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Charlie <span className="text-muted-foreground text-xs ml-2">(A13 * A12)</span></TableCell>
                                <TableCell>{charlie}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
