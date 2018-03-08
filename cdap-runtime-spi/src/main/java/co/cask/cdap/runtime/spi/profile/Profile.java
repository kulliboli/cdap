/*
 * Copyright © 2018 Cask Data, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

package co.cask.cdap.runtime.spi.profile;

import co.cask.cdap.runtime.spi.provisioner.ProvisionerSpecification;

import java.util.Map;
import java.util.Objects;

/**
 * Information of a profile. It encapsulates any information required to setup and teardown the program execution
 * environment. A profile is identified by name and must be assigned a provisioner and its related configuration.
 */
public class Profile {
  private final String name;
  private final String description;
  private final ProfileScope scope;
  private final Map<String, String> primaryProperties;
  private final Map<String, String> secondaryProperties;
  private final ProvisionerSpecification provisionerSpecification;

  public Profile(String name, String description, ProvisionerSpecification provisionerSpecification,
                 Map<String, String> primaryProperties, Map<String, String> secondaryProperties) {
    this(name, description, ProfileScope.USER, provisionerSpecification, primaryProperties, secondaryProperties);
  }

  public Profile(String name, String description, ProfileScope scope,
                 ProvisionerSpecification provisionerSpecification,
                 Map<String, String> primaryProperties, Map<String, String> secondaryProperties) {
    this.name = name;
    this.description = description;
    this.scope = scope;
    this.provisionerSpecification = provisionerSpecification;
    this.primaryProperties = primaryProperties;
    this.secondaryProperties = secondaryProperties;
  }

  public String getName() {
    return name;
  }

  public ProfileScope getScope() {
    return scope;
  }

  public ProvisionerSpecification getProvisionerSpecification() {
    return provisionerSpecification;
  }

  public String getDescription() {
    return description;
  }

  public Map<String, String> getPrimaryProperties() {
    return primaryProperties;
  }

  public Map<String, String> getSecondaryProperties() {
    return secondaryProperties;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }

    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Profile profile = (Profile) o;
    return Objects.equals(name, profile.name) &&
      Objects.equals(description, profile.description) &&
      Objects.equals(scope, profile.scope) &&
      Objects.equals(provisionerSpecification, profile.provisionerSpecification) &&
      Objects.equals(primaryProperties, profile.primaryProperties) &&
      Objects.equals(secondaryProperties, profile.secondaryProperties);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, description, scope, provisionerSpecification, primaryProperties, secondaryProperties);
  }
}
