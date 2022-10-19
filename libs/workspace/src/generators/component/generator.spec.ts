import { joinPathFragments, readProjectConfiguration, Tree } from '@nrwl/devkit';
import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Linter } from '@nrwl/linter';
import { libraryGenerator } from '@nrwl/react/src/generators/library/library';
import { storybookConfigurationGenerator } from '@nrwl/react/src/generators/storybook-configuration/configuration';
import generator from './generator';

describe('component generator', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await libraryGenerator(tree, {
      name: 'ui-lib',
      linter: Linter.EsLint,
      skipFormat: false,
      skipTsConfig: false,
      style: 'none',
      unitTestRunner: 'jest',
    });

    await storybookConfigurationGenerator(tree, {
      configureCypress: true,
      name: 'ui-lib',
      standaloneConfig: true,
    });

    await generator(tree, {
      name: 'ui-button',
      project: 'ui-lib',
    });

    const { sourceRoot } = readProjectConfiguration(tree, 'ui-lib');
    const { sourceRoot: e2eSourceRoot } = readProjectConfiguration(tree, 'ui-lib-e2e');

    expect(
      tree.exists(joinPathFragments(sourceRoot, 'lib/ui-button/ui-button.tsx'))
    ).toBe(true);

    expect(
      tree.exists(joinPathFragments(sourceRoot, 'lib/ui-button/ui-button.spec.tsx'))
    ).toBe(true);

    expect(
      tree.exists(joinPathFragments(sourceRoot, 'lib/ui-button/ui-button.stories.tsx'))
    ).toBe(true);

    expect(
      tree.exists(joinPathFragments(e2eSourceRoot, '/e2e/ui-button/ui-button.cy.ts'))
    ).toBe(true);
  });
});
