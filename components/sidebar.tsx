import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SidebarProps {
  occupations: (string | null)[];
  selectedOccupation: string | null;
  setSelectedOccupation: (occupation: string | null) => void;
  sortBy: 'name' | 'projectCount';
  setSortBy: (sortBy: 'name' | 'projectCount') => void;
}

export default function Sidebar({
  occupations,
  selectedOccupation,
  setSelectedOccupation,
  sortBy,
  setSortBy,
}: SidebarProps) {
  return (
    <aside className="w-full md:w-64 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="occupation-select">Occupation</Label>
          <Select
            value={selectedOccupation === null ? 'all' : selectedOccupation}
            onValueChange={(value: string) =>
              setSelectedOccupation(value === 'all' ? null : value)
            }
          >
            <SelectTrigger id="occupation-select">
              <SelectValue placeholder="All Occupations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Occupations</SelectItem>
              {occupations?.map((occupation) => (
                <SelectItem
                  key={occupation}
                  value={occupation ? occupation : ''}
                >
                  {occupation}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sort</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={sortBy}
            onValueChange={(value: 'name' | 'projectCount') => setSortBy(value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="name" id="sort-name" />
              <Label htmlFor="sort-name">Name</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="projectCount" id="sort-projects" />
              <Label htmlFor="sort-projects">Project Count</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
    </aside>
  );
}
