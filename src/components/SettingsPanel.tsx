import { Card, CardHeader, CardTitle, CardContent } from './Card';
import { Settings as SettingsIcon } from 'lucide-react';

export interface VideoSettings {
  frameSamplingRate: string;
  faceFocus: boolean;
  clipDuration: string;
}

export interface AudioSettings {
  chunkSize: string;
  spectrogramMode: boolean;
  noiseReduction: boolean;
}

interface VideoSettingsPanelProps {
  type: 'video';
  settings: VideoSettings;
  onChange: (settings: VideoSettings) => void;
}

interface AudioSettingsPanelProps {
  type: 'audio';
  settings: AudioSettings;
  onChange: (settings: AudioSettings) => void;
}

type SettingsPanelProps = VideoSettingsPanelProps | AudioSettingsPanelProps;

export function SettingsPanel({ type, settings, onChange }: SettingsPanelProps) {
  if (type === 'video') {
    const videoSettings = settings as VideoSettings;
    
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <SettingsIcon className="w-5 h-5" />
            Analysis Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Frame Sampling Rate
            </label>
            <select
              value={videoSettings.frameSamplingRate}
              onChange={(e) =>
                onChange({ ...videoSettings, frameSamplingRate: e.target.value })
              }
              className="w-full px-3 py-2 rounded-lg bg-background border border-input focus:ring-2 focus:ring-ring focus:border-ring"
            >
              <option value="auto">Auto</option>
              <option value="1fps">1 fps</option>
              <option value="2fps">2 fps</option>
              <option value="5fps">5 fps</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Face Focus</label>
            <input
              type="checkbox"
              checked={videoSettings.faceFocus}
              onChange={(e) =>
                onChange({ ...videoSettings, faceFocus: e.target.checked })
              }
              className="w-4 h-4 rounded border-input focus:ring-2 focus:ring-ring"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Clip Duration Limit
            </label>
            <select
              value={videoSettings.clipDuration}
              onChange={(e) =>
                onChange({ ...videoSettings, clipDuration: e.target.value })
              }
              className="w-full px-3 py-2 rounded-lg bg-background border border-input focus:ring-2 focus:ring-ring focus:border-ring"
            >
              <option value="auto">Auto</option>
              <option value="10s">10 seconds</option>
              <option value="30s">30 seconds</option>
              <option value="full">Full duration</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Model</label>
            <select
              disabled
              className="w-full px-3 py-2 rounded-lg bg-muted border border-input opacity-60 cursor-not-allowed"
            >
              <option>ResNeXt + LSTM</option>
            </select>
            <p className="text-xs text-muted-foreground mt-1">
              Additional models coming soon
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Audio settings
  const audioSettings = settings as AudioSettings;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <SettingsIcon className="w-5 h-5" />
          Analysis Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Chunk Size</label>
          <select
            value={audioSettings.chunkSize}
            onChange={(e) =>
              onChange({ ...audioSettings, chunkSize: e.target.value })
            }
            className="w-full px-3 py-2 rounded-lg bg-background border border-input focus:ring-2 focus:ring-ring focus:border-ring"
          >
            <option value="auto">Auto</option>
            <option value="2s">2 seconds</option>
            <option value="3s">3 seconds</option>
            <option value="5s">5 seconds</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Spectrogram Mode</label>
          <input
            type="checkbox"
            checked={audioSettings.spectrogramMode}
            onChange={(e) =>
              onChange({ ...audioSettings, spectrogramMode: e.target.checked })
            }
            className="w-4 h-4 rounded border-input focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Noise Reduction</label>
          <input
            type="checkbox"
            checked={audioSettings.noiseReduction}
            onChange={(e) =>
              onChange({ ...audioSettings, noiseReduction: e.target.checked })
            }
            className="w-4 h-4 rounded border-input focus:ring-2 focus:ring-ring"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Model</label>
          <select
            disabled
            className="w-full px-3 py-2 rounded-lg bg-muted border border-input opacity-60 cursor-not-allowed"
          >
            <option>ResNeXt + LSTM</option>
          </select>
          <p className="text-xs text-muted-foreground mt-1">
            Additional models coming soon
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
