import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../shared/services/theme.service';
import { FormsModule } from '@angular/forms';
import { GIS_COMMANDS } from '../../shared/constants/commands.const';

@Component({
  selector: 'app-shell-window',
  imports: [FormsModule],
  templateUrl: './shell-window.html',
  styleUrl: './shell-window.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellWindow {
  private readonly themeService = inject(ThemeService);

  input = signal<string>('');
  history = signal<{ prompt: string; output: string }[]>([
    { prompt: '~/gis $', output: 'Welcome to GIS. Type gis --help to get started.' },
  ]);

  onEnter(): void {
    const raw = this.input().trim();
    if (!raw) return;

    const output = this.handleCommand(raw);

    this.history.update((prev) => [
      ...prev,
      { prompt: '~/gis $', output: `> ${raw}` },
      ...(output ? [{ prompt: '', output }] : []),
    ]);

    this.input.set('');
  }

  private handleCommand(raw: string): string {
    const cmd = raw.startsWith('gis ') ? raw.slice(4).trim() : raw.trim();

    switch (cmd) {
      case '--dark-theme':
        this.themeService.setDark();
        return 'Theme switched to dark';

      case '--light-theme':
        this.themeService.setLight();
        return 'Theme switched to light';

      case '--help':
        return Object.keys(GIS_COMMANDS).join('  |  ');

      default:
        return `Unknown command: "${cmd}". Type gis --help.`;
    }
  }
}
