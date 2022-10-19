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

  it('create react component and unit & e2e test + story', async () => {
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
      name: 'data-table',
      project: 'ui-lib',
    });

    const { sourceRoot } = readProjectConfiguration(tree, 'ui-lib');
    const { sourceRoot: e2eSourceRoot } = readProjectConfiguration(tree, 'ui-lib-e2e');

    expect(
      tree.exists(joinPathFragments(sourceRoot, 'lib/data-table/DataTable.tsx'))
    ).toBe(true);

    expect(
      tree.exists(joinPathFragments(sourceRoot, 'lib/data-table/DataTable.spec.tsx'))
    ).toBe(true);

    expect(
      tree.exists(joinPathFragments(sourceRoot, 'lib/data-table/DataTable.stories.tsx'))
    ).toBe(true);
  });
});
